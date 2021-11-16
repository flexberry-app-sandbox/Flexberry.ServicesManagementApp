docker build --no-cache -f SQL\Dockerfile.PostgreSql -t services_management_app/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t services_management_app/app ../..
