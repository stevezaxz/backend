#backend


in running the app, run the commands below. \n
     - npm install
     - node app.js


list of endpoints
    jobs
        GET- http://localhost:3000/jobs/ <- get all job lists
        GET- http://localhost:3000/jobs/:id (http://localhost:3000/jobs/00b2ff17-34dd-432e-a37e-a963352450ac) <- get a specific job using an id. ID can be found on /mockDaa/jobs.json
        PUT - http://localhost:3000/jobs/:id <- updating of job status, payload should be.
            {
                "status": "scheduled"
            }

    notes
        POST = http://localhost:3000/notes <- create note sample payload
            {
                "job_id": 3213,
                "title": "dasdasd",
                "description": "123"
            }
        PUT = http://localhost:3000/notes/:id  <- update a note.
        
         ex. http://localhost:3000/notes/213
            {
                "job_id": 3213,
                "title": "dasdasd",
                "description": "123"
            }
            