import Navbar from "../components/Navbar";

const HomeLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <Navbar/>
      {children}
    </div>
  );
};

export default HomeLayout;
