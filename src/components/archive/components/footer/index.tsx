import UnderlineLink from '@/components/common/ui/UnderlineLink';

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className="flex w-full justify-between gap-[40px] text-[12px]">
      <UnderlineLink href="/">Awwwards</UnderlineLink>
      <UnderlineLink href="/">Instagram</UnderlineLink>
      <UnderlineLink href="/">Dribble</UnderlineLink>
      <UnderlineLink href="/"> LinkedIn</UnderlineLink>
    </div>
  );
};

export default Footer;
