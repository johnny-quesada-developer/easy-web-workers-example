import React, {
  HtmlHTMLAttributes,
  PropsWithChildren,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import merge, { MergeFilter } from "easy-css-merge";
import { theme } from "@shared";

export type CodeFragmentApi = {};

export type CodeFragmentRef = [HTMLPreElement, CodeFragmentApi];

export type CodeFragmentProps = PropsWithChildren<
  HtmlHTMLAttributes<HTMLPreElement>
> & {
  /**
   * This parameter allows you to filter the default set of classes, so you can override
   */
  classNameFilter?: MergeFilter;
  language?: "javascript" | "typescript" | "tsx" | "jsx";
};

type NewLineFun = {
  (indentation: number, newLine?: string): ReturnType<typeof write>;
  (newLine?: string): ReturnType<typeof write>;
};

type ForEachFun = <T>(
  array: T[],
  callback: ({
    item,
    index,
  }: {
    item: T;
    index: number;
    newLine: NewLineFun;
    concat: (text: string) => void;
    array: T[];
  }) => void
) => ReturnType<typeof write>;

export const write = (
  code: string
): {
  newLine: NewLineFun;
  concat: () => string;
  forEach: ForEachFun;
} => {
  let content = code;

  const newLine: NewLineFun = (...arg: unknown[]) => {
    const indentation = typeof arg[0] === "number" ? arg[0] : 0;
    const newLine = typeof arg[0] === "string" ? arg[0] : arg[1];
    const indent = " ".repeat(indentation);

    content = `${content}\n${indent}${newLine || ""}`;

    return write(content);
  };

  const actions: {
    newLine: NewLineFun;
    concat: () => string;
    forEach: ForEachFun;
  } = {
    newLine: newLine as NewLineFun,
    concat: () => content,
    forEach: null,
  } as const;

  const forEach: ForEachFun = (array, callback) => {
    array.forEach((item, index, array) =>
      callback({
        item,
        index,
        array,
        newLine,
        concat: (text: string): void => {
          write(text);
        },
      })
    );

    return actions;
  };

  actions.forEach = forEach;

  return actions;
};

export const CodeFragment = React.forwardRef<
  CodeFragmentRef,
  CodeFragmentProps
>(
  (
    { className, classNameFilter, children, language = "tsx", ...props },
    ref
  ) => {
    const containerRef = useRef<HTMLPreElement>(null);

    useImperativeHandle(
      ref,
      () => {
        // add your public api here
        const api: CodeFragmentApi = {};

        return [containerRef.current, api] as CodeFragmentRef;
      },
      []
    );

    useEffect(() => {
      if (!containerRef.current) return;

      theme.highlightElement(containerRef.current.firstChild as HTMLElement);
    }, [children]);

    return (
      <pre
        ref={containerRef}
        className={merge(["block visible", classNameFilter], className)}
        {...props}
      >
        <code className={merge("my-4", `language-${language}`)}>
          {children}
        </code>
      </pre>
    );
  }
);
