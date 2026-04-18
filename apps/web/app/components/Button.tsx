export default function Button(props:any){
    return <button onClick={()=>props.handler()} className="min-w-[80px] rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-cyan-400 hover:text-white transition-all active:scale-95">
        {props.content}
    </button>
}