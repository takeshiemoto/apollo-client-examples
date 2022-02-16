setup:
	docker-compose up -d

init:
	hasura metadata apply --project hasura
	hasura migrate apply --all-databases --project hasura
	hasura metadata reload --project hasura
	hasura seed apply

console:
	hasura console --project hasura

clean:
	docker-compose down --rmi all --volumes