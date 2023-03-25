

const SideHeader = ()=>{
    return (
        <div className="flex py-2 px-4 bg-orange-800 justify-end items-center gap-2">
            <h1 className="font-bold text-2xl mr-auto text-white">ChatMe</h1>
            <img className="rounded-full max-w-[40px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpa5oCHmskuYPL2pqULjxGx_jTf8UV_6FXn-1cL9rkkwjqSEt1PmYk4Us&s" alt="Pic" />
            <h2 className="underline font-mono text-xl text-white">Aditya Soni</h2>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
            </svg>
                </button>


        </div>
    )
}

export default SideHeader