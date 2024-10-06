import React from 'react'
import { Box, Text, Progress, VStack, Heading, Table, Thead, Tbody, Tr, Th, Td, Badge, Icon, Link, Button } from '@chakra-ui/react'
import { FiCheckCircle, FiAlertTriangle, FiInfo, FiExternalLink } from 'react-icons/fi'

interface ComplianceIssue {
  control: string
  status: 'Compliant' | 'Partially Compliant' | 'Non-Compliant'
  adherence: string
  details: string
  recommendation: string
  failingSubscriptions: Array<{ name: string, id: string }>
}

interface ComplianceStandardDetailProps {
  standard: {
    name: string
    compliance: number
    description: string
    issues: ComplianceIssue[]
  }
}

const ComplianceStandardDetail: React.FC<ComplianceStandardDetailProps> = ({ standard }) => {
  const { name, compliance, description, issues } = standard

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'compliant':
        return 'green'
      case 'partially compliant':
        return 'yellow'
      case 'non-compliant':
        return 'red'
      default:
        return 'gray'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'compliant':
        return FiCheckCircle
      case 'partially compliant':
        return FiInfo
      case 'non-compliant':
        return FiAlertTriangle
      default:
        return FiInfo
    }
  }

  return (
    <VStack spacing={6} align="stretch">
      <Box>
        <Heading size="md" mb={2}>Description</Heading>
        <Text color="gray.600">{description}</Text>
      </Box>

      <Box>
        <Heading size="md" mb={2}>Overall Compliance</Heading>
        <Progress value={compliance} size="lg" colorScheme={compliance > 80 ? 'green' : compliance > 60 ? 'yellow' : 'red'} borderRadius="full" />
        <Text mt={2} fontWeight="bold" textAlign="right">{compliance}%</Text>
      </Box>

      <Box>
        <Heading size="md" mb={4}>Detailed Compliance Information</Heading>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Control</Th>
              <Th>Status</Th>
              <Th>Details</Th>
              <Th>Failing Subscriptions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {issues.map((issue, index) => (
              <Tr key={index}>
                <Td fontWeight="medium">{issue.control}</Td>
                <Td>
                  <Badge colorScheme={getStatusColor(issue.status)} display="flex" alignItems="center">
                    <Icon as={getStatusIcon(issue.status)} mr={1} />
                    {issue.status}
                  </Badge>
                </Td>
                <Td>
                  <Text><strong>Adherence:</strong> {issue.adherence}</Text>
                  <Text mt={1}><strong>Details:</strong> {issue.details}</Text>
                  <Text mt={1} color="qbe.600">
                    <strong>Recommendation:</strong> {issue.recommendation}
                  </Text>
                </Td>
                <Td>
                  {issue.failingSubscriptions.map((sub, subIndex) => (
                    <Link
                      key={subIndex}
                      href={`https://portal.azure.com/#@/resource/subscriptions/${sub.id}`}
                      isExternal
                      color="qbe.500"
                      display="block"
                      mb={1}
                    >
                      {sub.name} <Icon as={FiExternalLink} mx="2px" />
                    </Link>
                  ))}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </VStack>
  )
}

export default ComplianceStandardDetail