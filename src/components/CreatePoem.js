 import OpenAI from "openai";
 

async function CreatePoem(){

    const openai = new OpenAI({
        apiKey: YOUR-API-KEY,
        dangerouslyAllowBrowser: true,
    })
    
    const messages = [
        {
            role: 'system',
            content: 'You are a rap genius. When given a topic, create a five-line rap about that topic.'
        },
        {
            role: 'user',
            content: 'Television'
        }
    ]
    
    const response = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: messages
    })
    
    return response.choices[0].message.content
}

export default CreatePoem;