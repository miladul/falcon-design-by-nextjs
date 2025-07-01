'use client';

import Header from '../Header';
import TopBar from "../TopBar";
import Footer from "../Footer";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col bg-[#f1f5f9]">
            <TopBar />
            <Header />
            <main className="mb-10">
                {children}
            </main>
            <Footer/>
        </div>
    );
}
