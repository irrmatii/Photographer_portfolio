import '@styles/globals.css';
import Nav from "@components/Nav";

export const metadata = {
    title: 'Jasper Lane',
    description: 'Jasper Lane Visual Storyteller & Photographer'
}


const Layout = ({children}) => {
    return (
        <html lang="en">
        <body>
        <main className='app'>
            <Nav/>
            {children}
        </main>
        </body>
        </html>
    );
};

export default Layout;