import { SectionBackground } from "@/components/section-background"

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <SectionBackground>
            {children}
        </SectionBackground>
    )
}

