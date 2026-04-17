"use client"

import { useEffect, useState } from "react"

export default function Sheet() {
    const [problem, setProblem] = useState([]);
    useEffect(() => {
        const problems = fetch("/api/progress").then((res) => res.json()).then(setProblem);
    }, [])
    return <div>
        <div>
            {problem.map((p: any) => {
                const isDone = p.progress[0]?.completed;
                return <div key={p.id}>
                    <h2>{p.title}</h2>
                    <button
                        onClick={() =>
                            fetch("/api/progress", {
                                method: "POST",
                                body: JSON.stringify({
                                    problemId: problem.id,
                                    completed: !isDone,
                                }),
                            })
                        }
                    >
                        {isDone ? "✅ Done" : "Mark Done"}
                    </button>
                </div>
            })}
        </div>
        Leetcode clone
    </div>
}
