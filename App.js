import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [displayValue, setDisplayValue] = useState('');

  const appendToDisplay = (value) => {
    setDisplayValue(displayValue + value);
  };

  const clearDisplay = () => {
    setDisplayValue('');
  };

  const deleteLastCharacter = () => {
    setDisplayValue(displayValue.slice(0, -1));
  };

  const calculate = () => {
    try {
      setDisplayValue(eval(displayValue).toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  const calculateBitwiseAnd = () => {
    const operands = displayValue.split('&').map(val => parseInt(val.trim()));
    if (operands.length === 2 && !isNaN(operands[0]) && !isNaN(operands[1])) {
      const binary1 = operands[0].toString(2).padStart(8, '0'); // Pad with leading zeros to ensure 8 bits
      const binary2 = operands[1].toString(2).padStart(8, '0'); // Pad with leading zeros to ensure 8 bits
      const result = operands[0] & operands[1];
      const resultBinary = result.toString(2).padStart(8, '0'); // Pad with leading zeros to ensure 8 bits
      setDisplayValue(result.toString());
      setBinaryDisplay(
        `${binary1}\n${operands[0]} &\n${binary2}\n${operands[1]} =\n${resultBinary}\n${result}`
      );
      setBinaryRepresentation(
        `${operands[0]} & ${operands[1]} = ${result}`
      );
    } else {
      setDisplayValue('Error');
    }
  };
  
  const calculateBitwiseOr = () => {
    const operands = displayValue.split('|').map(val => parseInt(val.trim()));
    if (operands.length === 2 && !isNaN(operands[0]) && !isNaN(operands[1])) {
      const binary1 = operands[0].toString(2).padStart(8, '0'); // Pad with leading zeros to ensure 8 bits
      const binary2 = operands[1].toString(2).padStart(8, '0'); // Pad with leading zeros to ensure 8 bits
      const result = operands[0] | operands[1];
      const resultBinary = result.toString(2).padStart(8, '0'); // Pad with leading zeros to ensure 8 bits
      setDisplayValue(result.toString());
      setBinaryDisplay(
        `${binary1}\n${operands[0]} |\n${binary2}\n${operands[1]} =\n${resultBinary}\n${result}`
      );
      setBinaryRepresentation(
        `${operands[0]} | ${operands[1]} = ${result}`
      );
    } else {
      setDisplayValue('Error');
    }
  };
  
  const calculateBitwiseXor = () => {
    const operands = displayValue.split('^').map(val => parseInt(val.trim()));
    if (operands.length === 2 && !isNaN(operands[0]) && !isNaN(operands[1])) {
      const binary1 = operands[0].toString(2).padStart(8, '0'); // Pad with leading zeros to ensure 8 bits
      const binary2 = operands[1].toString(2).padStart(8, '0'); // Pad with leading zeros to ensure 8 bits
      const result = operands[0] ^ operands[1];
      const resultBinary = result.toString(2).padStart(8, '0'); // Pad with leading zeros to ensure 8 bits
      setDisplayValue(result.toString());
      setBinaryDisplay(
        `${binary1}\n${operands[0]} ^\n${binary2}\n${operands[1]} =\n${resultBinary}\n${result}`
      );
      setBinaryRepresentation(
        `${operands[0]} ^ ${operands[1]} = ${result}`
      );
    } else {
      setDisplayValue('Error');
    }
  };
  

  const [binaryRepresentation, setBinaryRepresentation] = useState('');

  return (

    <View style={styles.container}>
  <Text style={styles.binaryDisplay}>{binaryRepresentation}</Text>
  <View style={styles.container}>
      <Text style={styles.display}>{displayValue}</Text>
      <View style={styles.row}>
        <TouchableOpacity style={[styles.button, styles.grayButton]} onPress={() => clearDisplay()}>
          <Text style={[styles.buttonText, styles.grayButtonText]}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.grayButton]} onPress={() => deleteLastCharacter()}>
          <Text style={[styles.buttonText, styles.grayButtonText]}>←</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.grayButton]} onPress={() => appendToDisplay('(')}>
          <Text style={[styles.buttonText, styles.grayButtonText]}>(</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.grayButton]} onPress={() => appendToDisplay(')')}>
          <Text style={[styles.buttonText, styles.grayButtonText]}>)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.orangeButton]} onPress={() => appendToDisplay('/')}>
          <Text style={[styles.buttonText, styles.orangeButtonText]}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={[styles.button, styles.blackButton]} onPress={() => appendToDisplay('7')}>
          <Text style={[styles.buttonText, styles.whiteText]}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.blackButton]} onPress={() => appendToDisplay('8')}>
          <Text style={[styles.buttonText, styles.whiteText]}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.blackButton]} onPress={() => appendToDisplay('9')}>
          <Text style={[styles.buttonText, styles.whiteText]}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.orangeButton]} onPress={() => appendToDisplay('*')}>
          <Text style={[styles.buttonText, styles.orangeButtonText]}>x</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={[styles.button, styles.blackButton]} onPress={() => appendToDisplay('4')}>
          <Text style={[styles.buttonText, styles.whiteText]}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.blackButton]} onPress={() => appendToDisplay('5')}>
          <Text style={[styles.buttonText, styles.whiteText]}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.blackButton]} onPress={() => appendToDisplay('6')}>
          <Text style={[styles.buttonText, styles.whiteText]}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.orangeButton]} onPress={() => appendToDisplay('-')}>
          <Text style={[styles.buttonText, styles.orangeButtonText]}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={[styles.button, styles.blackButton]} onPress={() => appendToDisplay('1')}>
          <Text style={[styles.buttonText, styles.whiteText]}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.blackButton]} onPress={() => appendToDisplay('2')}>
          <Text style={[styles.buttonText, styles.whiteText]}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.blackButton]} onPress={() => appendToDisplay('3')}>
          <Text style={[styles.buttonText, styles.whiteText]}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.orangeButton]} onPress={() => appendToDisplay('+')}>
          <Text style={[styles.buttonText, styles.orangeButtonText]}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={[styles.button, styles.blackButton]} onPress={() => appendToDisplay('0')}>
          <Text style={[styles.buttonText, styles.whiteText]}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.blackButton]} onPress={() => appendToDisplay('.')}>
          <Text style={[styles.buttonText, styles.whiteText]}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.blackButton]} onPress={() => calculate()}>
          <Text style={[styles.buttonText, styles.whiteText]}>=</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={[styles.button, styles.blackButton]} onPress={() => appendToDisplay('&')}>
          <Text style={[styles.buttonText, styles.whiteText]}>&</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.blackButton]} onPress={() => appendToDisplay('|')}>
          <Text style={[styles.buttonText, styles.whiteText]}>|</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.blackButton]} onPress={() => appendToDisplay('^')}>
          <Text style={[styles.buttonText, styles.whiteText]}>^</Text>
        </TouchableOpacity>
      </View>
    </View>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  display: {
    fontSize: 40,
    marginBottom: 20,
    backgroundColor: '#ffff',
    padding: 10,
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 25,
  },
  grayButton: {
    backgroundColor: '#d2d2d2',
  },
  blackButton: {
    backgroundColor: '#333',
  },
  orangeButton: {
    backgroundColor: '#ff8c00',
  },
  grayButtonText: {
    color: '#333',
  },
  whiteText: {
    color: '#fff',
  },
  orangeButtonText: {
    color: '#fff',
  },
  binaryDisplay: {
    fontSize: 20, // Adjust font size as needed
    color: '#000', // Adjust text color as needed
    marginBottom: 10, // Add margin bottom to separate it from the main display
  },
});
