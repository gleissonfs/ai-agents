const contract = {
  "fields": [
    {
      "id": "0b196f19-7b0b-42e1-abef-59f1902170e7",
      "name": "CPF"
    },
    {
      "id": "122f41e6-cb55-4fdb-aaf9-63742d0e51a1",
      "name": "Nome da loja"
    },
    {
      "id": "16763664-a987-481e-a8ee-742c7d34186e",
      "name": "Nome Completo Responsável"
    },
    {
      "id": "1eadba05-ddc8-4e3b-8b5a-b0acf348cbb0",
      "name": "Forma de Envio"
    },
    {
      "id": "2abf0c67-6a6d-4029-8238-9a04b0464bcd",
      "name": "Link do Contrato"    
    },
    {
      "id": "32543811-3940-4a9d-a032-b126631b3c99",
      "name": "Endereço"
    },
    {
      "id": "53822d57-2e83-46e3-abaa-6b5c0838ebea",
      "name": "CNPJ"
    },
    {
      "id": "60c111c7-5732-4c2b-ac8f-4ee9e66bd4cf",
      "name": "Fidelidade"
    },
    {
      "id": "7c315d4c-5107-4f97-9dce-afee24aefc7d",
      "name": "Notas"
    },
    {
      "id": "7d8c98fc-521f-4712-baa4-8039803535b3",
      "name": "Plano"
    },
    {
      "id": "9e4474d7-d5aa-4644-98db-c1ad9209b71e",
      "name": "Pessoa"
    }, 
    {
      "id": "d67c49b8-7737-4fdd-bc67-3ea596819d11",
      "name": "E-mail Contrato"
    },
    {
      "id": "e13f8736-818b-46f0-be91-28d3d7f3fa65",
      "name": "Razão Social"
    },
    {
      "id": "e278069c-29c6-4d18-b3ba-831127b3790a",
      "name": "RG"
    }
  ]
};


[
  {
    "headers": {
      "host": "n8n.srv1206045.hstgr.cloud",
      "user-agent": "axios/0.24.0",
      "content-length": "6799",
      "accept": "application/json, text/plain, */*",
      "b3": "6943eb390000000065facbae8d2b1791-65facbae8d2b1791-0",
      "content-type": "application/json",
      "traceparent": "00-6943eb390000000065facbae8d2b1791-65facbae8d2b1791-00",
      "tracestate": "dd=t.tid:6943eb3900000000;t.dm:-3;s:-1;p:65facbae8d2b1791",
      "x-b3-sampled": "0",
      "x-b3-spanid": "65facbae8d2b1791",
      "x-b3-traceid": "6943eb390000000065facbae8d2b1791",
      "x-datadog-parent-id": "7348409692561545105",
      "x-datadog-sampling-priority": "-1",
      "x-datadog-tags": "_dd.p.tid=6943eb3900000000",
      "x-datadog-trace-id": "7348409692561545105",
      "x-forwarded-for": "3.147.97.26",
      "x-forwarded-host": "n8n.srv1206045.hstgr.cloud",
      "x-forwarded-port": "443",
      "x-forwarded-proto": "https",
      "x-forwarded-server": "f47b98f081ce",
      "x-real-ip": "3.147.97.26",
      "accept-encoding": "gzip"
    },
    "params": {},
    "query": {},
    "body": {
      "auto_id": "baa17f81-d26d-4e26-a2b9-f8cbd2bbdf2c:main",
      "trigger_id": "f13752bc-8faa-4b8d-b0b8-f6c6b33e460a",
      "date": "2025-12-18T11:53:29.416Z",
      "payload": {
        "id": "86ae0aga4",
        "name": "John Doe",
        "content": "{\"ops\":[{\"insert\":\"\\n\",\"attributes\":{\"block-id\":\"block-975166e0-b4b6-429b-a9b6-bc7cf13b9272\"}}]}",
        "lower_name": "john doe",
        "html_content": null,
        "text_content": "",
        "content_size": "none",
        "sprint_points": null,
        "coverimage": null,
        "priority": null,
        "personal_priority": [],
        "draft_uuid": null,
        "custom_id": null,
        "custom_type": null,
        "status_id": "sc901307998429_KcfhSzsj",
        "workspace_id": "9013693485",
        "subcategory": "901307998429",
        "direct_parent": null,
        "root_parent": null,
        "merged_to": null,
        "subtask_sort": null,
        "subtask_sort_dir": null,
        "reccurence": {
          "v1": {
            "recurring": false,
            "recur_type": null,
            "recur_next": null,
            "recur_new_status": null,
            "recur_due_date": null,
            "recur_data": null,
            "recur_rule": null,
            "recur_task": null,
            "recur_skip_missed": false,
            "recur_on_status": null,
            "recur_on": null,
            "recur_copy_original": false,
            "recur_time": false,
            "recur_immediately": false,
            "recur_until": null,
            "recur_dst": null,
            "recur_tz_offset": null,
            "recur_tz": null,
            "recur_daily": false,
            "recur_ignore_today": false
          },
          "v2": {
            "set_time": false,
            "create_new_task": false,
            "periodically": false,
            "simple_settings": false,
            "ignore_weekends": false,
            "recur_on_schedule": false
          }
        },
        "privacy": {
          "private": false,
          "public": false,
          "public_token": null,
          "public_permission_level": null,
          "public_fields": null,
          "public_share_expires_on": null,
          "public_sharing": false,
          "seo_optimized": false,
          "made_public_by": null,
          "made_public_time": null
        },
        "templating": {
          "template": false,
          "original_subcat": null,
          "template_name": null,
          "team_id": null,
          "template_field_ids": null,
          "permanent_template_id": null,
          "visibility": null
        },
        "states": {
          "is_archived": false,
          "is_deleted": false,
          "is_encrypted": false
        },
        "time_mgmt": {
          "is_summary_task": false,
          "start_date": null,
          "start_date_time": false,
          "date_closed": null,
          "date_created": "1766000849577",
          "date_updated": "1766058807207",
          "due_date": null,
          "due_date_time": false,
          "date_deleted": null,
          "date_active": null,
          "date_unstarted": null,
          "date_done": null,
          "date_delegated": null,
          "time_estimate": null,
          "time_estimate_string": null,
          "time_spent": null,
          "sent_due_date_notif": false,
          "duration": {},
          "duration_is_elapsed": false
        },
        "checklists": [],
        "ownership": {
          "created_by_email": null,
          "owner": 176499320,
          "creator": 176499320,
          "deleted_by": null,
          "source": "template",
          "delegator": null,
          "form_id": null,
          "merged_to": null
        },
        "subtask_ids": [],
        "tags": [],
        "fields": [
          {
            "field_id": "0b196f19-7b0b-42e1-abef-59f1902170e7",
            "value": "11362546682",
            "value_options": null,
            "value_deleted": false,
            "value_richtext": null,
            "reasoning": null,
            "task_id": "86ae0aga4",
            "type": 15
          },
          {
            "field_id": "122f41e6-cb55-4fdb-aaf9-63742d0e51a1",
            "value": "Winchester",
            "value_options": null,
            "value_deleted": false,
            "value_richtext": null,
            "reasoning": null,
            "task_id": "86ae0aga4",
            "type": 15
          },
          {
            "field_id": "16763664-a987-481e-a8ee-742c7d34186e",
            "value": "Gleisson",
            "value_options": null,
            "value_deleted": false,
            "value_richtext": null,
            "reasoning": null,
            "task_id": "86ae0aga4",
            "type": 15
          },
          {
            "field_id": "1eadba05-ddc8-4e3b-8b5a-b0acf348cbb0",
            "value": "dcb53329-3be5-431b-8e37-916dee309af2",
            "value_options": null,
            "value_deleted": false,
            "value_richtext": null,
            "reasoning": null,
            "task_id": "86ae0aga4",
            "type": 1
          },
          {
            "field_id": "32543811-3940-4a9d-a032-b126631b3c99",
            "value": "Rua Tenente-Coronel Roberto, 29, Centro, Pará de Minas - MG, 35660-011",
            "value_options": null,
            "value_deleted": false,
            "value_richtext": null,
            "reasoning": null,
            "task_id": "86ae0aga4",
            "type": 15
          },
          {
            "field_id": "53822d57-2e83-46e3-abaa-6b5c0838ebea",
            "value": "00.000.000/0001-00",
            "value_options": null,
            "value_deleted": false,
            "value_richtext": null,
            "reasoning": null,
            "task_id": "86ae0aga4",
            "type": 15
          },
          {
            "field_id": "7c315d4c-5107-4f97-9dce-afee24aefc7d",
            "value": "2.600 por três meses, após 2.800 por mais três meses após 3.200 por mais três meses após 3.500",
            "value_options": null,
            "value_deleted": false,
            "value_richtext": null,
            "reasoning": null,
            "task_id": "86ae0aga4",
            "type": 15
          },
          {
            "field_id": "7d8c98fc-521f-4712-baa4-8039803535b3",
            "value": 2600,
            "value_options": null,
            "value_deleted": false,
            "value_richtext": null,
            "reasoning": null,
            "task_id": "86ae0aga4",
            "type": 8
          },
          {
            "field_id": "9e4474d7-d5aa-4644-98db-c1ad9209b71e",
            "value": "54c81169-0793-45c4-ab6e-3546da1b7264",
            "value_options": null,
            "value_deleted": false,
            "value_richtext": null,
            "reasoning": null,
            "task_id": "86ae0aga4",
            "type": 1
          },
          {
            "field_id": "aed2142b-5746-4956-876c-21ef7a2776ef",
            "value": 1766058807207,
            "value_options": null,
            "value_deleted": false,
            "value_richtext": null,
            "reasoning": null,
            "task_id": "86ae0aga4",
            "type": 23
          },
          {
            "field_id": "bcc75e79-dbac-4182-8d62-d61795e43a94",
            "value": "c013436a-6a42-44c6-baa1-548c714715df",
            "value_options": null,
            "value_deleted": false,
            "value_richtext": null,
            "reasoning": null,
            "task_id": "86ae0aga4",
            "type": 1
          },
          {
            "field_id": "bf2797cc-69f2-4adc-adbf-ec466e268018",
            "value": 1766559600000,
            "value_options": {
              "time": false
            },
            "value_deleted": false,
            "value_richtext": null,
            "reasoning": null,
            "task_id": "86ae0aga4",
            "type": 4
          },
          {
            "field_id": "d0c9339a-e71f-4c52-a8f2-674fbf6d35d6",
            "value": "teste@teste.com",
            "value_options": null,
            "value_deleted": false,
            "value_richtext": null,
            "reasoning": null,
            "task_id": "86ae0aga4",
            "type": 2
          },
          {
            "field_id": "d670bfb9-785c-4ebd-84f1-968306d921fa",
            "value": "447333c9-2fa6-4d63-8088-b0ff75e703ee",
            "value_options": null,
            "value_deleted": false,
            "value_richtext": null,
            "reasoning": null,
            "task_id": "86ae0aga4",
            "type": 15
          },
          {
            "field_id": "d67c49b8-7737-4fdd-bc67-3ea596819d11",
            "value": "teste@teste.com",
            "value_options": null,
            "value_deleted": false,
            "value_richtext": null,
            "reasoning": null,
            "task_id": "86ae0aga4",
            "type": 2
          },
          {
            "field_id": "e13f8736-818b-46f0-be91-28d3d7f3fa65",
            "value": "Winchester LTDA",
            "value_options": null,
            "value_deleted": false,
            "value_richtext": null,
            "reasoning": null,
            "task_id": "86ae0aga4",
            "type": 15
          },
          {
            "field_id": "e15a7f3a-d060-4f0b-b14d-5064c7924333",
            "value": "+55 3796718725",
            "value_options": null,
            "value_deleted": false,
            "value_richtext": null,
            "reasoning": null,
            "task_id": "86ae0aga4",
            "type": 3
          },
          {
            "field_id": "e278069c-29c6-4d18-b3ba-831127b3790a",
            "value": "12345678",
            "value_options": null,
            "value_deleted": false,
            "value_richtext": null,
            "reasoning": null,
            "task_id": "86ae0aga4",
            "type": 15
          },
          {
            "field_id": "f22c099e-5a19-4084-8241-bc1d832011aa",
            "value": "7b4ca827-5c3d-4c32-a5d5-ef3517f17824",
            "value_options": null,
            "value_deleted": false,
            "value_richtext": null,
            "reasoning": null,
            "task_id": "86ae0aga4",
            "type": 1
          }
        ],
        "lists": [
          {
            "list_id": "901307998429",
            "type": "home"
          }
        ],
        "users": [
          {
            "userid": 93979427,
            "type": "assigned"
          },
          {
            "userid": 84161485,
            "type": "watcher"
          },
          {
            "userid": 93979427,
            "type": "watcher"
          },
          {
            "userid": 176499320,
            "type": "owner"
          },
          {
            "userid": 176499320,
            "type": "creator"
          }
        ],
        "groups": [],
        "related_tasks": [],
        "related_tasks_count": {
          "dependsOn": 0,
          "dependedBy": 0
        },
        "attachments": [],
        "docs": [],
        "_version_vector": {
          "workspace_id": 9013693485,
          "object_type": "task",
          "object_id": "86ae0aga4",
          "vector": [
            {
              "master_id": 17,
              "version": 1766058807218000,
              "deleted": false
            }
          ]
        }
      }
    },
    "webhookUrl": "https://n8n.srv1206045.hstgr.cloud/webhook-test/699ff80a-8075-49f8-8721-de876249dca6",
    "executionMode": "test"
  }
]