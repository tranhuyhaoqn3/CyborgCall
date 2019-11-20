using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;

namespace Helpers
{
    public class TextToSpeech
    {
        private const string subscriptionKey = "8ac5da92ec49424f929761eecf6489ea";
        private const string tokenFetchUri = "https://westus.api.cognitive.microsoft.com/sts/v1.0/issueToken";
        public static byte[] TextToSpeechAsync(string text)
        {
            var client = new HttpClient();

            //get token
            client.DefaultRequestHeaders.Add("Ocp-Apim-Subscription-Key", subscriptionKey);
            UriBuilder uriBuilder = new UriBuilder(tokenFetchUri);
            var token = client.PostAsync(uriBuilder.Uri.AbsoluteUri, null).Result.Content.ReadAsStringAsync().Result;

            //get speech
            var request = new HttpRequestMessage();
            string host = "https://westus.tts.speech.microsoft.com/cognitiveservices/v1";
            string body = @"<speak version='1.0' xmlns='https://www.w3.org/2001/10/synthesis' xml:lang='en-US'>
              <voice name='Microsoft Server Speech Text to Speech Voice (en-US, JessaRUS)'>" +
              text + "</voice></speak>";
            // Set the HTTP method
            request.Method = HttpMethod.Post;
            // Construct the URI
            request.RequestUri = new Uri(host);
            // Set the content type header
            request.Content = new StringContent(body, Encoding.UTF8, "application/ssml+xml");
            // Set additional header, such as Authorization and User-Agent
            request.Headers.Add("Authorization", "Bearer " + token);
            request.Headers.Add("Connection", "Keep-Alive");
            // Update your resource name
            request.Headers.Add("User-Agent", "TTSPHP");
            request.Headers.Add("X-Microsoft-OutputFormat", "riff-8khz-16bit-mono-pcm");
            var response = client.SendAsync(request).Result;

            if (response.StatusCode == System.Net.HttpStatusCode.OK)
            {
                return response.Content.ReadAsByteArrayAsync().Result;
            }
            return null;
        }
    }
}
