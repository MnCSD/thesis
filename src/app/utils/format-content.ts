interface FormattedBlock {
  type: "code" | "paragraph" | "numbered-list";
  content: string;
  language?: string;
  key: string;
  items?: Array<{
    type: "list-item" | "text";
    number?: string;
    content: string;
  }>;
}

export function formatContent(content: string): FormattedBlock[] {
  // Split content into parts based on code blocks
  const parts = content.split(/(```[\s\S]*?```)/);

  //@ts-ignore
  return parts
    .map((part, index) => {
      // Check if this part is a code block
      if (part.startsWith("```")) {
        const [, language = "", code = ""] =
          part.match(/```(\w*)\n?([\s\S]*?)```/) || [];
        return {
          type: "code",
          language: language || "plaintext",
          content: code.trim(),
          key: `code-${index}`,
        };
      }

      // Split non-code parts into paragraphs
      return part
        .split("\n\n")
        .map((paragraph, pIndex) => {
          // Check if it's a numbered list
          if (paragraph.match(/^\d+[\.:]/m)) {
            const items = paragraph.split("\n").map((item) => {
              const match = item.match(/^(\d+[\.:])(.+)/);
              if (match) {
                return {
                  type: "list-item" as const,
                  number: match[1],
                  content: match[2].trim(),
                };
              }
              return { type: "text" as const, content: item };
            });

            return {
              type: "numbered-list",
              items,
              key: `list-${index}-${pIndex}`,
              content: paragraph,
            };
          }

          // Regular paragraph
          return {
            type: "paragraph",
            content: paragraph.trim(),
            key: `p-${index}-${pIndex}`,
          };
        })
        .filter((item) => item.content !== "");
    })
    .flat();
}
