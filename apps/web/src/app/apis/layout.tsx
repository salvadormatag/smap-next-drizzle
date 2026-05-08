export default function SdkReferenceLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className={"flex min-h-screen"}>
            <div className="flex-1 bg-gray-100 p-4">
                {children}
            </div>
        </main>
    );
}
