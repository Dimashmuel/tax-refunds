interface ParagraphProps {
  children: React.ReactNode;
}

export const Paragraph = ({ children }: ParagraphProps) => {
  return <p className={'text-heading-3 md:text-lg ${claasName'}> {children}</p>;
};
