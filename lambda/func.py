import json
import boto3
from decimal import Decimal

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('project-cloudresume-table')

def lambda_handler(event, context):
    try:
        # Get the item
        response = table.get_item(Key={'id': '0'})
        item = response.get('Item')

        if not item:
            # Create initial record
            views = 1
            table.put_item(Item={'id': '0', 'views': views})
        else:
            # Increment existing count
            views = int(item.get('views', 0)) + 1
            table.put_item(Item={'id': '0', 'views': views})

        # Convert Decimal to int before returning JSON
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': json.dumps({'views': int(views)})
        }

    except Exception as e:
        print("Error:", str(e))
        return {
            'statusCode': 500,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': json.dumps({'error': str(e)})
        }
