import { ChevronDown } from "lucide-react"

export function FilterSection({title, children}) {
    return (
        <div className="rounded-[10px] bg-white p-4 mb-2">
            <div className="font-bold flex justify-between">
                {title}
                <ChevronDown className="cursor-pointer"/>
            </div>
            {children}
        </div>
    )
}