"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function Sheet() {
    const [problems, setProblems] = useState<any[]>([]);

    useEffect(() => {
        fetch("/api/progress")
            .then((res) => res.json())
            .then(setProblems);
    }, []);

    const toggleStatus = async (pId: string, currentStatus: boolean) => {
        // Optimistic Update: Update UI immediately
        setProblems(prev => prev.map(p =>
            p.id === pId ? { ...p, progress: [{ completed: !currentStatus }] } : p
        ));

        await fetch("/api/progress", {
            method: "POST",
            body: JSON.stringify({
                problemId: pId,
                completed: !currentStatus,
            }),
        });
    };

    const getDifficultyColor = (diff: string) => {
        switch (diff?.toLowerCase()) {
            case 'easy': return 'text-emerald-400';
            case 'medium': return 'text-yellow-500';
            case 'hard': return 'text-red-500';
            default: return 'text-gray-400';
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white p-8 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Practice : Blind 75 Sheet
            </h1>

            <div className="w-full max-w-5xl overflow-hidden rounded-xl border border-white/10 bg-slate-900/50 backdrop-blur-md shadow-2xl">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-white/10 bg-white/5">
                            <th style={{padding:"6px",textAlign:"center"}} className="px-6 py-4 text-sm font-semibold text-gray-400">Title</th>
                            <th style={{padding:"6px"}} className="px-6 py-4 text-sm font-semibold text-gray-400">Difficulty</th>
                            <th style={{padding:"6px"}} className="px-6 py-4 text-sm font-semibold text-gray-400">Link</th>
                            <th style={{padding:"6px"}} className="px-6 py-4 text-sm font-semibold text-gray-400">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {problems.map((p: any) => {
                            const isDone = p.progress[0]?.completed;
                            return (
                                <tr key={p.id} className="hover:bg-white/[0.02] transition-colors group">
                                    <td style={{paddingLeft:"30px"}} className={`px-6 py-4 font-medium ${isDone ? 'text-gray-500 line-through' : 'text-gray-200'}`}>
                                        {p.title}
                                    </td>
                                    <td className={`px-6 py-4 font-bold text-sm uppercase tracking-wider ${getDifficultyColor(p.difficulty)}`}>
                                        {p.difficulty || "Medium"}
                                    </td>
                                    <td className="px-6 py-4">
                                        <Link
                                            href={p.url || "#"}
                                            target="_blank"
                                            className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors"
                                        >
                                            <img src="leetcode.png" className="w-5 h-5" />
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4">
                                        <input
                                            type="checkbox"
                                            checked={isDone || false}
                                            onChange={() => toggleStatus(p.id, isDone)}
                                            className="h-5 w-5 cursor-pointer accent-cyan-500 rounded border-gray-600 bg-gray-700"
                                        />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                {problems.length === 0 && (
                    <div className="py-20 text-center text-gray-500 italic">
                        No problems found. Start adding some!
                    </div>
                )}
            </div>
        </div>
    )
}