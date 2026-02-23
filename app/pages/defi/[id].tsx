import { useState } from 'react';
import dynamic from 'next/dynamic';

const MonacoEditor = dynamic(import('react-monaco-editor'), { ssr: false });

const ChallengeDetail = () => {
    const [code, setCode] = useState('// Write your code here\n');

    const handleCodeChange = (newCode: string) => {
        setCode(newCode);
    };

    const handleSubmit = () => {
        // submission logic here
        console.log('Submitted code:', code);
    };

    return (
        <div>
            <h1>Challenge Detail Page</h1>
            <h2>Problem Description</h2>
            <p>This is the problem description for the challenge.</p>
            <h3>Test Cases</h3>
            <pre>
                {`Input: 
[Example input]
Output:
[Expected output]`}
            </pre>
            <MonacoEditor
                width="800"
                height="600"
                language="typescript"
                value={code}
                onChange={handleCodeChange}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default ChallengeDetail;