import { Heading, CodeLine, Code } from '@/components'

export default function Contact() {
  return (
    <div>
      <Heading>Contact</Heading>
      <div>
        <div className="bg-code-background px-4 py-10">
          <div>
            <CodeLine n={1}>
              {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
              <Code v="comment">// Contact via Email</Code>
            </CodeLine>
            <CodeLine n={2}>
              <Code v="keyword">const</Code>
              <Code v="var">email</Code>
              <Code v="keyword">=</Code>
              <Code v="string">bkorur95@gmail.com</Code>
            </CodeLine>
            <CodeLine n={3}></CodeLine>
            <CodeLine n={4}>
              {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
              <Code v="comment">// Link through social media</Code>
            </CodeLine>
            <CodeLine n={5}>
              <Code v="keyword">const</Code>
              <Code v="var">socialLinks</Code>
              <Code v="keyword">=</Code>
              <Code v="operator">[</Code>
            </CodeLine>
            <CodeLine n={6}>
              <Code v="operator">{`{`}</Code>
            </CodeLine>
            <CodeLine n={7}>
              <Code v="property" indent>type</Code>
              <Code v="operator">:</Code>
              <Code v="string">&apos;github&apos;</Code>
            </CodeLine>
            <CodeLine n={8}></CodeLine>
            <CodeLine n={9}></CodeLine>
            <CodeLine n={10}></CodeLine>
          </div>
        </div>
      </div>
    </div>
  )
}
