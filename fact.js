var fact_Module_Factory = function () {
    var fact = {
      name: 'fact',
      typeInfos: [{
          localName: 'Facturi',
          typeName: null,
          propertyInfos: [{
              name: 'factura',
              required: true,
              collection: true,
              elementName: {
                localPart: 'Factura'
              },
              typeInfo: '.Facturi.Factura'
            }]
        }, {
          localName: 'Facturi.Factura',
          typeName: null,
          propertyInfos: [{
              name: 'antet',
              required: true,
              elementName: {
                localPart: 'Antet'
              },
              typeInfo: '.Facturi.Factura.Antet'
            }, {
              name: 'detalii',
              required: true,
              elementName: {
                localPart: 'Detalii'
              },
              typeInfo: '.Facturi.Factura.Detalii'
            }, {
              name: 'sumar',
              required: true,
              elementName: {
                localPart: 'Sumar'
              },
              typeInfo: '.Facturi.Factura.Sumar'
            }, {
              name: 'observatii',
              required: true,
              elementName: {
                localPart: 'Observatii'
              },
              typeInfo: '.Facturi.Factura.Observatii'
            }, {
              name: 'facturaID',
              required: true,
              elementName: {
                localPart: 'FacturaID'
              }
            }, {
              name: 'guidFactura',
              required: true,
              elementName: {
                localPart: 'GUID_factura'
              },
              typeInfo: 'AnyType'
            }]
        }, {
          localName: 'Facturi.Factura.Antet',
          typeName: null,
          propertyInfos: [{
              name: 'furnizorNume',
              required: true,
              elementName: {
                localPart: 'FurnizorNume'
              },
              typeInfo: 'AnyType'
            }, {
              name: 'furnizorCIF',
              required: true,
              elementName: {
                localPart: 'FurnizorCIF'
              }
            }, {
              name: 'furnizorNrRegCom',
              required: true,
              elementName: {
                localPart: 'FurnizorNrRegCom'
              },
              typeInfo: 'AnyType'
            }, {
              name: 'furnizorCapital',
              required: true,
              elementName: {
                localPart: 'FurnizorCapital'
              },
              typeInfo: 'AnyType'
            }, {
              name: 'furnizorTara',
              required: true,
              elementName: {
                localPart: 'FurnizorTara'
              },
              typeInfo: 'AnyType'
            }, {
              name: 'furnizorLocalitate',
              required: true,
              elementName: {
                localPart: 'FurnizorLocalitate'
              },
              typeInfo: 'AnyType'
            }, {
              name: 'furnizorJudet',
              required: true,
              elementName: {
                localPart: 'FurnizorJudet'
              },
              typeInfo: 'AnyType'
            }, {
              name: 'furnizorAdresa',
              required: true,
              elementName: {
                localPart: 'FurnizorAdresa'
              },
              typeInfo: 'AnyType'
            }, {
              name: 'furnizorTelefon',
              required: true,
              elementName: {
                localPart: 'FurnizorTelefon'
              },
              typeInfo: 'AnyType'
            }, {
              name: 'furnizorMail',
              required: true,
              elementName: {
                localPart: 'FurnizorMail'
              },
              typeInfo: 'AnyType'
            }, {
              name: 'furnizorBanca',
              required: true,
              elementName: {
                localPart: 'FurnizorBanca'
              },
              typeInfo: 'AnyType'
            }, {
              name: 'furnizorIBAN',
              required: true,
              elementName: {
                localPart: 'FurnizorIBAN'
              },
              typeInfo: 'AnyType'
            }, {
              name: 'furnizorGrupa',
              required: true,
              elementName: {
                localPart: 'FurnizorGrupa'
              },
              typeInfo: 'UnsignedByte'
            }, {
              name: 'furnizorInformatiiSuplimentare',
              required: true,
              elementName: {
                localPart: 'FurnizorInformatiiSuplimentare'
              },
              typeInfo: 'AnyType'
            }, {
              name: 'guidCodClient',
              required: true,
              elementName: {
                localPart: 'GUID_cod_client'
              },
              typeInfo: 'AnyType'
            }, {
              name: 'clientNume',
              required: true,
              elementName: {
                localPart: 'ClientNume'
              }
            }, {
              name: 'clientInformatiiSuplimentare',
              required: true,
              elementName: {
                localPart: 'ClientInformatiiSuplimentare'
              }
            }, {
              name: 'clientCIF',
              required: true,
              elementName: {
                localPart: 'ClientCIF'
              }
            }, {
              name: 'clientNrRegCom',
              required: true,
              elementName: {
                localPart: 'ClientNrRegCom'
              }
            }, {
              name: 'clientJudet',
              required: true,
              elementName: {
                localPart: 'ClientJudet'
              }
            }, {
              name: 'clientLocalitate',
              required: true,
              elementName: {
                localPart: 'ClientLocalitate'
              }
            }, {
              name: 'clientTara',
              required: true,
              elementName: {
                localPart: 'ClientTara'
              }
            }, {
              name: 'clientAdresa',
              required: true,
              elementName: {
                localPart: 'ClientAdresa'
              }
            }, {
              name: 'clientTelefon',
              required: true,
              elementName: {
                localPart: 'ClientTelefon'
              },
              typeInfo: 'UnsignedInt'
            }, {
              name: 'clientEmail',
              required: true,
              elementName: {
                localPart: 'ClientEmail'
              },
              typeInfo: 'AnyType'
            }, {
              name: 'clientBanca',
              required: true,
              elementName: {
                localPart: 'ClientBanca'
              },
              typeInfo: 'AnyType'
            }, {
              name: 'clientIBAN',
              required: true,
              elementName: {
                localPart: 'ClientIBAN'
              },
              typeInfo: 'AnyType'
            }, {
              name: 'clientGrupa',
              required: true,
              elementName: {
                localPart: 'ClientGrupa'
              },
              typeInfo: 'Decimal'
            }, {
              name: 'facturaNumar',
              required: true,
              elementName: {
                localPart: 'FacturaNumar'
              },
              typeInfo: 'UnsignedByte'
            }, {
              name: 'facturaData',
              required: true,
              elementName: {
                localPart: 'FacturaData'
              }
            }, {
              name: 'facturaScadenta',
              required: true,
              elementName: {
                localPart: 'FacturaScadenta'
              }
            }, {
              name: 'facturaTaxareInversa',
              required: true,
              elementName: {
                localPart: 'FacturaTaxareInversa'
              }
            }, {
              name: 'facturaTVAIncasare',
              required: true,
              elementName: {
                localPart: 'FacturaTVAIncasare'
              }
            }, {
              name: 'facturaEFactura',
              required: true,
              elementName: {
                localPart: 'FacturaEFactura'
              }
            }, {
              name: 'facturaTip',
              required: true,
              elementName: {
                localPart: 'FacturaTip'
              },
              typeInfo: 'AnyType'
            }, {
              name: 'facturaInformatiiSuplimentare',
              required: true,
              elementName: {
                localPart: 'FacturaInformatiiSuplimentare'
              },
              typeInfo: 'AnyType'
            }, {
              name: 'facturaMoneda',
              required: true,
              elementName: {
                localPart: 'FacturaMoneda'
              }
            }, {
              name: 'facturaCotaTVA',
              required: true,
              elementName: {
                localPart: 'FacturaCotaTVA'
              }
            }, {
              name: 'facturaGreutate',
              required: true,
              elementName: {
                localPart: 'FacturaGreutate'
              },
              typeInfo: 'Decimal'
            }, {
              name: 'facturaAccize',
              required: true,
              elementName: {
                localPart: 'FacturaAccize'
              },
              typeInfo: 'Decimal'
            }, {
              name: 'cod',
              required: true,
              elementName: {
                localPart: 'Cod'
              },
              typeInfo: 'AnyType'
            }]
        }, {
          localName: 'Facturi.Factura.Detalii.Continut.Linie',
          typeName: null,
          propertyInfos: [{
              name: 'linieNrCrt',
              required: true,
              elementName: {
                localPart: 'LinieNrCrt'
              },
              typeInfo: 'UnsignedByte'
            }, {
              name: 'gestiune',
              elementName: {
                localPart: 'Gestiune'
              },
              typeInfo: 'AnyType'
            }, {
              name: 'activitate',
              elementName: {
                localPart: 'Activitate'
              },
              typeInfo: 'AnyType'
            }, {
              name: 'descriere',
              required: true,
              elementName: {
                localPart: 'Descriere'
              }
            }, {
              name: 'codArticolFurnizor',
              required: true,
              elementName: {
                localPart: 'CodArticolFurnizor'
              },
              typeInfo: 'AnyType'
            }, {
              name: 'codArticolClient',
              required: true,
              elementName: {
                localPart: 'CodArticolClient'
              },
              typeInfo: 'AnyType'
            }, {
              name: 'codBare',
              required: true,
              elementName: {
                localPart: 'CodBare'
              },
              typeInfo: 'AnyType'
            }, {
              name: 'informatiiSuplimentare',
              required: true,
              elementName: {
                localPart: 'InformatiiSuplimentare'
              }
            }, {
              name: 'um',
              required: true,
              elementName: {
                localPart: 'UM'
              }
            }, {
              name: 'cantitate',
              required: true,
              elementName: {
                localPart: 'Cantitate'
              },
              typeInfo: 'Decimal'
            }, {
              name: 'pret',
              required: true,
              elementName: {
                localPart: 'Pret'
              },
              typeInfo: 'Decimal'
            }, {
              name: 'valoare',
              required: true,
              elementName: {
                localPart: 'Valoare'
              },
              typeInfo: 'Decimal'
            }, {
              name: 'procTVA',
              required: true,
              elementName: {
                localPart: 'ProcTVA'
              },
              typeInfo: 'UnsignedByte'
            }, {
              name: 'tva',
              required: true,
              elementName: {
                localPart: 'TVA'
              },
              typeInfo: 'Decimal'
            }, {
              name: 'cont',
              required: true,
              elementName: {
                localPart: 'Cont'
              },
              typeInfo: 'UnsignedShort'
            }, {
              name: 'tipDeducere',
              elementName: {
                localPart: 'TipDeducere'
              },
              typeInfo: 'AnyType'
            }, {
              name: 'pretVanzare',
              elementName: {
                localPart: 'PretVanzare'
              },
              typeInfo: 'AnyType'
            }]
        }, {
          localName: 'Facturi.Factura.Observatii',
          typeName: null,
          propertyInfos: [{
              name: 'txtObservatii',
              required: true,
              elementName: {
                localPart: 'txtObservatii'
              }
            }, {
              name: 'soldClient',
              required: true,
              elementName: {
                localPart: 'SoldClient'
              }
            }, {
              name: 'modalitatePlata',
              required: true,
              elementName: {
                localPart: 'ModalitatePlata'
              }
            }]
        }, {
          localName: 'Facturi.Factura.Detalii.Continut',
          typeName: null,
          propertyInfos: [{
              name: 'linie',
              required: true,
              collection: true,
              elementName: {
                localPart: 'Linie'
              },
              typeInfo: '.Facturi.Factura.Detalii.Continut.Linie'
            }]
        }, {
          localName: 'Facturi.Factura.Sumar',
          typeName: null,
          propertyInfos: [{
              name: 'totalValoare',
              required: true,
              elementName: {
                localPart: 'TotalValoare'
              },
              typeInfo: 'Decimal'
            }, {
              name: 'totalTVA',
              required: true,
              elementName: {
                localPart: 'TotalTVA'
              },
              typeInfo: 'Decimal'
            }, {
              name: 'total',
              required: true,
              elementName: {
                localPart: 'Total'
              },
              typeInfo: 'Decimal'
            }, {
              name: 'linkPlata',
              required: true,
              elementName: {
                localPart: 'LinkPlata'
              },
              typeInfo: 'AnyType'
            }]
        }, {
          localName: 'Facturi.Factura.Detalii',
          typeName: null,
          propertyInfos: [{
              name: 'continut',
              required: true,
              elementName: {
                localPart: 'Continut'
              },
              typeInfo: '.Facturi.Factura.Detalii.Continut'
            }, {
              name: 'txtObservatii1',
              required: true,
              elementName: {
                localPart: 'txtObservatii1'
              }
            }]
        }],
      elementInfos: [{
          typeInfo: '.Facturi',
          elementName: {
            localPart: 'Facturi'
          }
        }]
    };
    return {
      fact: fact
    };
  };
  if (typeof define === 'function' && define.amd) {
    define([], fact_Module_Factory);
  }
  else {
    var fact_Module = fact_Module_Factory();
    if (typeof module !== 'undefined' && module.exports) {
      module.exports.fact = fact_Module.fact;
    }
    else {
      var fact = fact_Module.fact;
    }
  }