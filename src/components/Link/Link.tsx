import styled from "styled-components";

const LinkElement = styled.a`
  color: #1f2544;

  & {
    outline: none;
    text-decoration: none;
  }

  &:visited {
  }

  &:focus,
  &:hover {
    text-decoration: underline;
  }

  &:active {
  }
`;

type Props = {
  children: React.ReactNode;
  href: string;
  className?: string;
};

export const Link = ({ className, href, children }: Props) => {
  return (
    <LinkElement className={className} href={href}>
      {children}
    </LinkElement>
  );
};
