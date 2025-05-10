
const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      Root Layout
      {children}
    </div>
  );
};

export default RootLayout;