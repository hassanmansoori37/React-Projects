// Layout Components
const Header = () => <header style={{ background: '#282c34', color: 'white', padding: '1rem' }}>Header</header>;
const Sidebar = () => <aside style={{ width: '200px', background: '#f4f4f4' }}>Sidebar</aside>;
const Footer = () => <footer style={{ borderTop: '1px solid #ccc', padding: '1rem' }}>Footer</footer>;

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar />
        <main style={{ padding: '20px', flex: 1 }}>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;