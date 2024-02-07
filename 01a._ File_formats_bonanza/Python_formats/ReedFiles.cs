using System;
using System.IO;
using System.Xml;
using Newtonsoft.Json;
using CsvHelper;


// jeg har prøvet alle mulige måde til at gøre det i c# og kan ikke finde ud af det :-(
public class ReedFiles
{
    public void ReadAndParseFiles(string jsonFilePath, string csvFilePath, string xmlFilePath)
    {
        // Læs og parse JSON-fil
        Console.WriteLine("JSON data:");
        string jsonData = File.ReadAllText(jsonFilePath);
        Console.WriteLine(jsonData);

        // Læs og parse CSV-fil
        Console.WriteLine("\nCSV data:");
        using (var reader = new StreamReader(csvFilePath))
        using (var csv = new CsvReader(reader))
        {
            while (csv.Read())
            {
                for (int i = 0; i < csv.FieldHeaders.Length; i++)
                {
                    Console.Write(csv.GetField(i));
                    if (i < csv.FieldHeaders.Length - 1)
                    {
                        Console.Write(", ");
                    }
                }
                Console.WriteLine();
            }
        }

        // Læs og parse XML-fil
        Console.WriteLine("\nXML data:");
        XmlDocument xmlDocument = new XmlDocument();
        xmlDocument.Load(xmlFilePath);
        Console.WriteLine(xmlDocument.InnerXml);
    }
}
