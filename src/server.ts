import { fastify } from 'fastify';
import { fastifyCors } from '@fastify/cors';
import { getAllPromptsRoute } from './routes/get-all-prompts';
import { uploadVideoRoute } from './routes/upload-video';
import { createTranscriptionsRoute } from './routes/create-transcription';
import { generateAICompletionRoute } from './routes/genarate-ai-completion';

const app = fastify();

app.register(fastifyCors, {
  origin: '*',
});

app.register(getAllPromptsRoute);
app.register(uploadVideoRoute);
app.register(createTranscriptionsRoute);
app.register(generateAICompletionRoute);

app.listen({ port: 3333 }).then(() => {
  console.log('Server is running at port 3333');
});
