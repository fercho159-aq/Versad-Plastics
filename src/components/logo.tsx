import { cn } from '@/lib/utils';
import Image from 'next/image';

interface LogoProps {
    className?: string;
}

const Logo = ({ className }: LogoProps) => {
    return (
        <div className={cn("flex items-center gap-2 font-bold text-primary", className)}>
            <Image src="/images/LOGO.png" alt="Versad Plastics Logo" width={32} height={32} className="h-8 w-8" />
            <span className="text-2xl">Versad Plastics</span>
        </div>
    );
};

export default Logo;
