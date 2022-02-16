setup:
	docker-compose up -d

	hasura metadata apply --project hasura
	hasura migrate apply --all-databases --project hasura
	hasura metadata reload --project hasura

update:
	hasura metadata apply --project hasura
	hasura migrate apply --all-databases --project hasura
	hasura metadata reload --project hasura

console:
	hasura console --project hasura

clean:
	docker-compose down --rmi all --volumes