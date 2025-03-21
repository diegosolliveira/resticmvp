import { ReactNode } from "react";
import "./styles.css"

interface staticCard {
    name: string;
    subtitle: string;
    description: string;
    children?: ReactNode;
}

export function StaticCard({ name, subtitle, description, children }: staticCard) {
    return (
        <div className="static-card">
            <h1 className="static-card-title">{name}{children}</h1>
            <h2>{subtitle}</h2>
            <span>{description}</span>
        </div>
    )
} 