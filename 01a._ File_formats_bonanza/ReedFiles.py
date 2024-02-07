
import json
import csv
import xml.etree.ElementTree as ET

# Stier til mine filer jeg har oprettet filer
json_file = r"C:\Softwareudvikling\SystemIntergration\Software_SystemIntegration_2024\01a._ File_formats_bonanza\me.json"
csv_file = r"C:\Softwareudvikling\SystemIntergration\Software_SystemIntegration_2024\01a._ File_formats_bonanza\me.csv"
xml_file = r"C:\Softwareudvikling\SystemIntergration\Software_SystemIntegration_2024\01a._ File_formats_bonanza\me.xml"

# Kan ikke finde ud af at parse min YAML-fil :-(


# Her parser jeg JSON-fil
with open(json_file, 'r') as f:
    json_data = json.load(f)
    print("JSON data:")
    print(json_data)
    print()

# Her parser jeg CSV-fil
with open(csv_file, 'r') as f:
    reader = csv.reader(f)
    csv_data = list(reader)
    print("CSV data:")
    print(csv_data)
    print()

# Parse XML-fil
tree = ET.parse(xml_file)
root = tree.getroot()

xml_data = {}
for child in root:
    xml_data[child.tag] = child.text

print("XML data:")
print(xml_data)
