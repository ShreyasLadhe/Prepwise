import {ReactNode} from 'react'
import Link from "next/link";
import Image from "next/image";

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="root-layout">
            <nav className="flex items-center gap-2">
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo.svg" alt="Logo" width={38} height={32} />
                </Link>
                <h2 className="text-primary-100">PrepWise</h2>
            </nav>
            {children}
        </div>
    );
};
export default RootLayout;

