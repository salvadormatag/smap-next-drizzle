import {LlistatItemsSdkReference} from "@/app/lib/ItemsNavigator";
import {NavigatorComponent, NavigatorComponentProps} from "@smap-dev/sdk/navigator";

export default function SdkReferenceLayout({ children }: { children: React.ReactNode }) {
    const props: NavigatorComponentProps = {
        items: LlistatItemsSdkReference,
        features: {
            opened: true,
            collapsed: false,
            model: "SIDEBAR"
        }
    }
    return (
        <main className={"flex min-h-screen"}>
            <NavigatorComponent {...props} />
            <div className="flex-1 bg-gray-100 p-4">
                {children}
            </div>
        </main>
    );
}
