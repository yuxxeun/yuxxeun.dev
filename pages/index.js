import Image from 'next/image'
import Meta from '@/components/Meta'

export default function Home() {
  return (
    <>
    <Meta />
    <div className="container">
        <div className="row my-5">
          <div className="col-md-2">
          </div>
          <div className="col-md-8">
            <div className="text-center">
              <Image className="profile" src="/favicon/favicon.jpg" height={200} width={200} alt="yuxxeun profile" priority />
                <h5 className="py-5">
                  thoughts, stories, and very ideas
                </h5>
            </div>
            <p>
            public anon key = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
            <br/>
            eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvcXdzanZrZm1jb2V4a2VvamZjIiwicm9sZSI6ImFub24iLC
            JpYXQiOjE2NDUxMTczOTgsImV4cCI6MTk2MDY5MzM5OH0.
            <br/>
            1Q9PxClmlGIqA9MFqHQ2yOuClz55XRpEY11jls0CxDQ
	          <br/>
            project url = https://woqwsjvkfmcoexkeojfc.supabase.co
	          <br/>
            jwt secret = 3b126715-2503-4f09-b695-1f3b7f703660
            <br/>
	          anon key table user management = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
            <br/>
            eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvcXdzanZrZm1jb2V4a2VvamZjIiwicm9sZS
            <br/>
            I6ImFub24iLCJpYXQiOjE2NDUxMTczOTgsImV4cCI6MTk2MDY5MzM5OH0.
            <br/>
            <pre>
              <code>
              1Q9PxClmlGIqA9MFqHQ2yOuClz55XRpEY11jls0CxDQ
              </code>
            </pre> 
	          <br/>
            service role = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
            <br/>
            eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvcXdzanZrZm1jb2V4a2VvamZjIiwicm9sZSI6InNlcnZ
            <br/>
            pY2Vfcm9sZSIsImlhdCI6MTY0NTExNzM5OCwiZXhwIjoxOTYwNjkzMzk4fQ.
            <br/>
            ZuqyC_KDRW9MRxih4_g_mVSUYu6JKNOivZUZbyrBHIc
            </p>
          </div>
        </div>
      </div>
      </>
  )
}
