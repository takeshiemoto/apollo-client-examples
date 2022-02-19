setup:
	docker-compose up -d

init:
	hasura deploy --project hasura
	hasura seed apply --database-name default --project hasura

up:
	docker-compose up -d

console:
	hasura console --project hasura

clean:
	docker-compose down --rmi all --volumes