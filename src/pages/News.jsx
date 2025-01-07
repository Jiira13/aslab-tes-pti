import React, { useEffect, useState } from 'react';

const News = () => {
  const [videos, setVideos] = useState([]);
  const API_KEY = 'AIzaSyDa3HLUpiDCS4TCN8i1DcbTHmXx_DT2BaM'; 
  const CHANNEL_ID = 'UCGIY_O-8vW4rfX98KlMkvRg';

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=10&type=video&key=${API_KEY}`
        );
        const data = await response.json();
        setVideos(data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="bg-white text-black min-h-screen mt-12">
      <section id="news-section" className="py-8 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Nintendo News</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div key={video.id.videoId} className="shadow-lg rounded-lg overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id.videoId}`}
                  title={video.snippet.title}
                  className="w-full h-60"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{video.snippet.title}</h2>
                  <p className="text-sm text-gray-600">
                    {video.snippet.description.substring(0, 100)}...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
