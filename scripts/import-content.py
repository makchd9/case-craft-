"""Read the supplied workbook without changing it; preserve its rows for provenance."""
import openpyxl, json, pathlib, sys
book=openpyxl.load_workbook(sys.argv[1],data_only=True)
data={}
for sheet in book:
 rows=list(sheet.values)
 if sheet.title!='README':
  data[sheet.title]=[dict(zip(rows[0],row)) for row in rows[1:] if any(v is not None for v in row)]
pathlib.Path('lib/content/starter-set.json').write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n')
print({sheet:len(rows) for sheet,rows in data.items()})
