#!/usr/bin/env python
 
import os
from jinja2 import Environment, FileSystemLoader
import xmltodict
 
PATH = os.path.dirname(os.path.abspath(__file__))
TEMPLATE_ENVIRONMENT = Environment(
    autoescape=False,
    loader=FileSystemLoader(os.path.join(PATH, 'templates')),
    trim_blocks=False)
 
 
def render_template(template_filename, context):
    return TEMPLATE_ENVIRONMENT.get_template(template_filename).render(context)
 
 
def create_js_class(resource):
    inputFile = "./fhir-models/" + resource + ".xml"
    outputFile = "./js-models/" + resource + ".js"
    with open(inputFile) as fd:
        obj = xmltodict.parse(fd.read())
    
    resourceObj = obj[resource]
    attribs = []
    for attrib in resourceObj:
        if attrib.isalpha():
            attribs.append(attrib)

    context = {
        'resource': resource,
        'attribs': attribs
    }

    with open(outputFile, 'w') as f:
        html = render_template('class-template.js', context)
        f.write(html)


def create_swift_class():
    outputFile = "SampleClass.swift"

    context = {
        'text': "Hello world!"
    }

    with open(outputFile, 'w') as f:
        html = render_template('swift-template.swift', context)
        f.write(html)
 

def main():
    # resources = ["Patient", "Location", "Practitioner"]
    # for resource in resources:
    #     create_js_class(resource)
    
    create_swift_class()
 
########################################
 
if __name__ == "__main__":
    main()