
db.createCollection( 'proveedor', {validator: {$jsonSchema: {bsonType: 'object',title:'proveedor',required: [         'proveedor_id'],properties: {proveedor_id: {bsonType: 'objectId'},telefono: {bsonType: 'string'},fax: {bsonType: 'string'},nif: {bsonType: 'string'},marca: {bsonType: 'object',
title:'marca',properties: {nom: {bsonType: 'string'}}},direccion: {bsonType: 'object',
title:'direccion',properties: {calle: {bsonType: 'string'},numero: {bsonType: 'int'},piso: {bsonType: 'int'},puerta: {bsonType: 'string'},ciudad: {bsonType: 'string'},cp: {bsonType: 'string'},pais: {bsonType: 'string'}}}}         }      },
autoIndexId:true
});  
db.createCollection( 'cliente', {validator: {$jsonSchema: {bsonType: 'object',title:'cliente',required: [         'cliente_id'],properties: {cliente_id: {bsonType: 'objectId'},nombre: {bsonType: 'string'},telefono: {bsonType: 'string'},email: {bsonType: 'string'},fecha_registro: {bsonType: 'timestamp'},recomendado: {bsonType: 'string'},direccion: {bsonType: 'object',
title:'direccion',properties: {calle: {bsonType: 'string'},numero: {bsonType: 'int'},piso: {bsonType: 'int'},puerta: {bsonType: 'string'},ciudad: {bsonType: 'string'},cp: {bsonType: 'string'},pais: {bsonType: 'string'}}}}         }      }});  
db.createCollection( 'empleado', {validator: {$jsonSchema: {bsonType: 'object',title:'empleado',required: [         'empleado_id'],properties: {empleado_id: {bsonType: 'objectId'},nombre: {bsonType: 'string'}}         }      }});  
db.createCollection( 'gafa', {validator: {$jsonSchema: {bsonType: 'object',title:'gafa',required: [         'gafa_id',          'proveedor'],properties: {gafa_id: {bsonType: 'objectId'},graduacion_derecha: {bsonType: 'double'},graduacion_izquierda: {bsonType: 'double'},color_montura: {bsonType: 'string'},color_cristal_derecho: {bsonType: 'string'},color_cristal_izquierdo: {bsonType: 'string'},precio: {bsonType: 'double'},tipo_montura: {bsonType: 'object',
title:'tipo_montura',properties: {flotante: {bsonType: 'bool'},pasta: {bsonType: 'bool'},metalica: {bsonType: 'bool'}}},marca: {bsonType: 'object',
title:'marca',properties: {nom: {bsonType: 'string'}}},proveedor: {bsonType: 'objectId'}}         }      }});  
db.createCollection( 'pedido', {validator: {$jsonSchema: {bsonType: 'object',title:'pedido',required: [         'pedido_id',          'gafa',          'empleado',          'cliente'],properties: {pedido_id: {bsonType: 'objectId'},fecha_pedido: {bsonType: 'timestamp'},gafa: {bsonType: 'objectId'},empleado: {bsonType: 'objectId'},cliente: {bsonType: 'objectId'}}         }      }});  

/* Line 'direccion-cliente' */


/* Line 'direccion-proveedor' */


/* Line 'marca-proveedor' */


/* Line 'tipo_montura-Gafas' */


/* Reference 'cliente_pedido' */


/* Reference 'empleado_pedido' */


/* Reference 'gafa_pedido' */


/* Reference 'proveedor_gafa' */
