import { ReactNode } from 'react';

type ContainerProps = {
    children: ReactNode
}

export default function Container({ children }: ContainerProps) {
    return <div className="min-w-[1100px] max-w-[1100px] mx-auto min-h-screen flex flex-col justify-between border-l border-r bg-white">
        {children}
    </div>
}