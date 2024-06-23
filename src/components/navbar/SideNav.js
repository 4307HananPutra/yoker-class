'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export default function NavAdmin() {
    const inactiveLink = 'flex gap-1 p-3';
    const activeLink = inactiveLink+' bg-[#508CF3] text-white rounded-lg';
    const pathname = usePathname();

    return (
        <aside className='p-7 text-slate-800 border-r w-[15%] shadow-xl bg-base-100 mr-5 h-[80vh]'>
            <nav className='flex flex-col gap-2'>
                <Link href={'/'} className={`hover:flex hover:gap-1 hover:p-3 hover:bg-[#508CF3] hover:text-white hover:rounded-lg ${pathname === '/admin' ? activeLink : inactiveLink}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    Dashboard
                </Link>           
                <Link href={'/dashboard'} className={`hover:flex hover:gap-1 hover:p-3 hover:bg-[#508CF3] hover:text-white hover:rounded-lg ${pathname === '/admin' ? activeLink : inactiveLink}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    Kelas
                </Link>           
                <Link href={'/dashboard'} className={`hover:flex hover:gap-1 hover:p-3 hover:bg-[#508CF3] hover:text-white hover:rounded-lg ${pathname === '/admin' ? activeLink : inactiveLink}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    Materi
                </Link>           
                <Link href={'/dashboard'} className={`hover:flex hover:gap-1 hover:p-3 hover:bg-[#508CF3] hover:text-white hover:rounded-lg ${pathname === '/admin' ? activeLink : inactiveLink}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    Tenggat
                </Link>           
            </nav>
        </aside>
    )
}