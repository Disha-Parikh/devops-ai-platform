terraform {
	required_version = ">= 1.5"
	backend "s3" {
		bucket = "devops-ai-terraform-state"
		key = "eks/terraform.tfstate"
		region = "us-east-1"
		dynamodb_table = "terraform-locks"
		encrypt = true
	}
}
