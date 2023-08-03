# Zoo-foodmanager

## How-To

### start the Zoo-foodmanager

Setting up your environment is done in three easy steps:
1. First configure the running microservices and their names in `docker-compose.yml`
2. Then, configure how requests are dispatched in `config/dispatcher.ex`
3. Lastly, simply start the docker-compose.


Boot your microservices-enabled system using docker-compose.

    cd /path/to/zoo-project
    docker-compose up -d --build

You can shut down using `docker-compose down`.

