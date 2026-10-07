import type { ReactNode } from "react";


export default function RootLayout({children} : {children: ReactNode}){
    return(
        <section>
            <aside>
                <h2>Dashboard Siderbar</h2>
                <ul>
                    <li>Overview</li>
                    <li>Analytics</li>
                    <li>Settings</li>
                </ul>
            </aside>
            <div>
                {children}
            </div>
        </section>
    )
}