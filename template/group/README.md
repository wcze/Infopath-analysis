``` xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<xsd:schema targetNamespace="http://schemas.microsoft.com/office/infopath/2003/myXSD/2020-10-27T07:28:52" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:my="http://schemas.microsoft.com/office/infopath/2003/myXSD/2020-10-27T07:28:52" xmlns:xd="http://schemas.microsoft.com/office/infopath/2003" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
	<xsd:element name="DEMO">
		<xsd:complexType>
			<xsd:sequence>
				<xsd:element ref="my:groupA1List" minOccurs="0"/>
			</xsd:sequence>
			<xsd:anyAttribute processContents="lax" namespace="http://www.w3.org/XML/1998/namespace"/>
		</xsd:complexType>
	</xsd:element>
	<xsd:element name="groupA1List">
		<xsd:complexType>
			<xsd:sequence>
				<xsd:element ref="my:A1List" minOccurs="0" maxOccurs="unbounded"/>
			</xsd:sequence>
		</xsd:complexType>
	</xsd:element>
	<xsd:element name="A1List">
		<xsd:complexType>
			<xsd:sequence>
				<xsd:element ref="my:fieldA1" minOccurs="0"/>
			</xsd:sequence>
		</xsd:complexType>
	</xsd:element>
	<xsd:element name="fieldA1" type="xsd:string"/>
</xsd:schema>
```
