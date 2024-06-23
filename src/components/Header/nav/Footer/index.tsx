interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className="flex w-full justify-between gap-[40px] text-[12px]">
      <a>Awwwards</a>
      <a>Instagram</a>
      <a>Dribble</a>
      <a>LinkedIn</a>
    </div>
  );
};

export default Footer;
