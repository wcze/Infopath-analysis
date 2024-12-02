
# 查看Docs - [docs](/docs/)

## manifest.xsf
InfoPath 表单的核心文件，包含表单的结构、视图、数据连接、规则、验证逻辑等。是表单模板的配置文件。
该文件会自动关联同目录下的xsd,xml,xsl文件，因此在修改文件时，表单会随着同目录下的配置文件而更新表单页面。可以通过右键该文件-设计来查看表单变化。

**打包：** 使用常规的压缩包工具对文件夹进行重新压缩为xsn可能导致文件损坏。可以右键该文件-设计打开设计页面，文件-另存为为xsn文件即打包成功。

## manifest.xsf

## myschema.xsd

```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<xsd:schema targetNamespace="http://schemas.microsoft.com/office/infopath/2003/myXSD/2020-10-27T07:28:52" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:my="http://schemas.microsoft.com/office/infopath/2003/myXSD/2020-10-27T07:28:52" xmlns:xd="http://schemas.microsoft.com/office/infopath/2003" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
	<xsd:element name="DEMO">
		<xsd:complexType>
			<xsd:sequence>
				<xsd:element ref="my:fieldA1" minOccurs="0"/>
			</xsd:sequence>
			<xsd:anyAttribute processContents="lax" namespace="http://www.w3.org/XML/1998/namespace"/>
		</xsd:complexType>
	</xsd:element>
	<xsd:element name="fieldA1" type="xsd:string"/>
</xsd:schema>
```

`xsd:sequence`包含`xsd:element`所有字段信息。

