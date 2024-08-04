"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ConstructionIcon } from "lucide-react";


interface DevelopmentNoticeProps {
    variant?: "default" | "small";
    demo?: boolean;
    onAcknowledgeCallback?: () => void;
}

const DevelopmentNotice: React.FC<DevelopmentNoticeProps> = ({ variant = "default", demo = false, onAcknowledgeCallback = () => { } }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [hide, setHide] = useState(false);

    const acknowledge = () => {
        setIsOpen(false);
        setTimeout(() => {
            setHide(true);
        }, 700);
        onAcknowledgeCallback();
    };

    useEffect(() => {
        setIsOpen(true);
    }, []);

    return (
        variant === "default" ? (
            <div className={cn("fixed z-[200] bottom-0 left-0 right-0 sm:left-4 sm:bottom-4 w-full sm:max-w-md duration-700", !isOpen ? "transition-[opacity,transform] translate-y-8 opacity-0" : "transition-[opacity,transform] translate-y-0 opacity-100", hide && "hidden")}>
                <div className="dark:bg-card bg-background rounded-md m-3 border border-border shadow-lg">
                    <div className="grid gap-2">
                        <div className="border-b border-border h-14 flex items-center justify-between p-4">
                            <h1 className="text-lg font-medium">Website Under Development</h1>
                            <ConstructionIcon className="h-[1.2rem] w-[1.2rem]" />
                        </div>
                        <div className="p-4">
                            <p className="text-sm font-normal text-start">
                                My website is currently under development to enhance your experience. Some features may not be fully functional at this time.
                                <br />
                                <br />
                                <span className="text-xs">By clicking <span className="font-medium opacity-80">Acknowledge</span>, you acknowledge that you are aware of this.</span>
                                <br />
                                <a href="/development-info" className="text-xs underline">Learn more.</a>
                            </p>
                        </div>
                        <div className="flex gap-2 p-4 py-5 border-t border-border dark:bg-background/20">
                            <Button onClick={acknowledge} className="w-full font-bold">Acknowledge</Button>
                        </div>
                    </div>
                </div>
            </div>
        ) : variant === "small" && (
            <div className={cn("fixed z-[200] bottom-0 left-0 right-0 sm:left-4 sm:bottom-4 w-full sm:max-w-md duration-700", !isOpen ? "transition-[opacity,transform] translate-y-8 opacity-0" : "transition-[opacity,transform] translate-y-0 opacity-100", hide && "hidden")}>
                <div className="m-3 dark:bg-card bg-background border border-border rounded-lg">
                    <div className="flex items-center justify-between p-3">
                        <h1 className="text-lg font-medium">Website Under Development</h1>
                        <ConstructionIcon className="h-[1.2rem] w-[1.2rem]" />
                    </div>
                    <div className="p-3 -mt-2">
                        <p className="text-sm text-left text-muted-foreground">
                            Our website is currently under development to enhance your experience. Some features may not be fully functional at this time.
                        </p>
                    </div>
                    <div className="p-3 flex items-center gap-2 mt-2 border-t">
                        <Button onClick={acknowledge} className="w-full h-9 rounded-full">Acknowledge</Button>
                    </div>
                </div>
            </div>
        )
    );
};

export default DevelopmentNotice;
