# Trust Registeries


## Policies

Policies in the turn registry are defined in a JSON format. These policies are a way to tell to the CM that is the DP or DC can exchange the data not. The policies can also inform the DC/DP that are they allowed to interact with the CM used by the user for giving consents.

```JSON
{
	"version":"1.0",
	"rules": [
		{
			"effect": "allow | deny",
			"when": {
				"key": "pc | mcc | domain | cidr | registeredWith | dataType",
				"operator": "equal | notEqual | like | in",
				"value": [
					"",
					""
				]
			}
		},
		{
			"effect": "allow | deny",
			"when": {
				"key": "pc | mcc | domain | cidr | registeredWith | dataType",
				"operator": "equal | notEqual | like | in",
				"value": [
					"",
					""
				]
			}
		}
	],
	"rulesOperator": "allOf | anyOf"
}
```

### JSON policy structure

| Properties | Description |
|:--- |:--- |
| version | version of the policy |
| rules | array of rules defined in this policy |
| rulesOperator | operator to be used between multiple rules. Either match all or match any  |
| effect | if the condition is met should we allow or deny the transaction |
|when | conditional block |
|key | key to use for fetching the contextual value. Allowed values are pc (purpose code), mcc (merchant category code), cidr (CIDR notation to provide IP range), registeredWith (array containing where entity is registered ), dataType (dataType shared/requested by DP/DC) |
|operator | operator to be used for matching the contextual value of the key with value provided. |
|value | array of values |

