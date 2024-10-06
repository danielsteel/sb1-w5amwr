import React, { useState } from 'react'
import { Box, Heading, SimpleGrid, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure, Text } from '@chakra-ui/react'
import ComplianceStandardCard from '../components/ComplianceStandardCard'
import ComplianceStandardDetail from '../components/ComplianceStandardDetail'

const ComplianceStandards = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedStandard, setSelectedStandard] = useState(null)

  const standards = [
    {
      name: 'NIST SP 800-53 (Rev. 5)',
      compliance: 85,
      description: 'Security and privacy controls for federal information systems and organizations.',
      issues: [
        {
          control: 'AC-2 Account Management',
          status: 'Partially Compliant',
          adherence: 'Some user accounts lack proper documentation and periodic review.',
          details: 'Several user accounts in the HR department have not been reviewed in the last 6 months.',
          recommendation: 'Implement a quarterly user account review process and document all account creations and modifications.',
          failingSubscriptions: [
            { name: 'HR Subscription', id: 'sub-123-hr' },
            { name: 'Finance Subscription', id: 'sub-456-finance' }
          ]
        },
        {
          control: 'CM-6 Configuration Settings',
          status: 'Non-Compliant',
          adherence: 'Some systems are not using approved, secure configurations.',
          details: 'Multiple virtual machines are running outdated and unsupported operating systems.',
          recommendation: 'Upgrade all systems to supported OS versions and apply security baselines.',
          failingSubscriptions: [
            { name: 'Legacy App Subscription', id: 'sub-789-legacy' },
            { name: 'Dev/Test Subscription', id: 'sub-012-devtest' }
          ]
        }
      ]
    },
    {
      name: 'ISO/IEC 27001',
      compliance: 92,
      description: 'International standard for information security management systems (ISMS).',
      issues: [
        {
          control: 'A.12.6.1 Management of technical vulnerabilities',
          status: 'Partially Compliant',
          adherence: 'Vulnerability scanning is not performed regularly on all systems.',
          details: 'Monthly vulnerability scans are missing for some non-production environments.',
          recommendation: 'Extend vulnerability scanning to all environments and automate the process.',
          failingSubscriptions: [
            { name: 'Dev/Test Subscription', id: 'sub-012-devtest' },
            { name: 'Staging Subscription', id: 'sub-345-staging' }
          ]
        }
      ]
    },
    {
      name: 'SOC 2',
      compliance: 88,
      description: 'Service Organization Control 2 - Focuses on security, availability, processing integrity, confidentiality, and privacy of customer data.',
      issues: [
        {
          control: 'CC6.1 Logical Access Security',
          status: 'Partially Compliant',
          adherence: 'Some systems lack proper access controls and monitoring.',
          details: 'Access reviews for critical systems are not performed regularly.',
          recommendation: 'Implement quarterly access reviews for all critical systems and applications.',
          failingSubscriptions: [
            { name: 'Core Banking Subscription', id: 'sub-901-banking' },
            { name: 'Customer Data Subscription', id: 'sub-234-custdata' }
          ]
        }
      ]
    },
    {
      name: 'CIS Controls',
      compliance: 79,
      description: 'Center for Internet Security Controls - Prioritized set of actions to protect organizations and data from known cyber attack vectors.',
      issues: [
        {
          control: 'CIS Control 7: Continuous Vulnerability Management',
          status: 'Partially Compliant',
          adherence: 'Vulnerability management process is not fully automated.',
          details: 'Manual vulnerability assessment is performed quarterly instead of continuously.',
          recommendation: 'Implement automated vulnerability scanning and integrate with CI/CD pipeline.',
          failingSubscriptions: [
            { name: 'Development Subscription', id: 'sub-567-dev' },
            { name: 'Production Subscription', id: 'sub-890-prod' }
          ]
        }
      ]
    },
    {
      name: 'CSA CCM',
      compliance: 91,
      description: 'Cloud Security Alliance Cloud Controls Matrix - Cybersecurity control framework for cloud computing.',
      issues: [
        {
          control: 'AIS-04: Application & Interface Security - Data Security/Integrity',
          status: 'Partially Compliant',
          adherence: 'Data integrity checks are not consistently implemented across all interfaces.',
          details: 'Some legacy APIs lack proper input validation and data integrity checks.',
          recommendation: 'Implement consistent data validation and integrity checks across all application interfaces.',
          failingSubscriptions: [
            { name: 'API Gateway Subscription', id: 'sub-432-api' },
            { name: 'Legacy Systems Subscription', id: 'sub-765-legacy' }
          ]
        }
      ]
    },
    {
      name: 'ISO/IEC 27017',
      compliance: 94,
      description: 'Guidelines for information security controls applicable to cloud services.',
      issues: [
        {
          control: 'CLD.6.3 Segregation in virtual computing environments',
          status: 'Partially Compliant',
          adherence: 'Some virtual environments lack proper network segregation.',
          details: 'Development and production workloads are not fully isolated in some cloud environments.',
          recommendation: 'Implement strict network segregation between development and production environments in all cloud platforms.',
          failingSubscriptions: [
            { name: 'Cloud Infrastructure Subscription', id: 'sub-098-cloud' },
            { name: 'DevOps Subscription', id: 'sub-321-devops' }
          ]
        }
      ]
    },
    {
      name: 'FedRAMP',
      compliance: 87,
      description: 'Federal Risk and Authorization Management Program - Standardizes security assessment for cloud products and services used by U.S. federal agencies.',
      issues: [
        {
          control: 'AC-2 (1) Automated System Account Management',
          status: 'Partially Compliant',
          adherence: 'Automated account management is not fully implemented across all systems.',
          details: 'Some legacy systems still rely on manual account provisioning and deprovisioning.',
          recommendation: 'Extend automated account management to all systems, including legacy applications.',
          failingSubscriptions: [
            { name: 'Identity Management Subscription', id: 'sub-543-idm' },
            { name: 'Legacy Systems Subscription', id: 'sub-765-legacy' }
          ]
        }
      ]
    },
    {
      name: 'NIST CSF',
      compliance: 83,
      description: 'NIST Cybersecurity Framework - Voluntary framework of computer security guidance for organizations to better manage and reduce cybersecurity risk.',
      issues: [
        {
          control: 'PR.AC-4: Access permissions and authorizations are managed',
          status: 'Partially Compliant',
          adherence: 'Access reviews are not consistently performed across all systems.',
          details: 'Some departments are not conducting regular access reviews as required.',
          recommendation: 'Implement organization-wide access review process with automated reminders and escalations.',
          failingSubscriptions: [
            { name: 'HR Systems Subscription', id: 'sub-876-hr' },
            { name: 'Finance Systems Subscription', id: 'sub-109-finance' }
          ]
        }
      ]
    },
    {
      name: 'PCI DSS',
      compliance: 95,
      description: 'Payment Card Industry Data Security Standard - Information security standard for organizations that handle branded credit cards.',
      issues: [
        {
          control: 'Requirement 6: Develop and maintain secure systems and applications',
          status: 'Partially Compliant',
          adherence: 'Some applications are not following secure coding practices consistently.',
          details: 'Static code analysis is not performed on all code changes in payment processing applications.',
          recommendation: 'Integrate static code analysis into CI/CD pipeline for all payment-related applications.',
          failingSubscriptions: [
            { name: 'Payment Gateway Subscription', id: 'sub-210-payment' },
            { name: 'E-commerce Subscription', id: 'sub-543-ecommerce' }
          ]
        }
      ]
    },
    {
      name: 'COBIT 2019',
      compliance: 81,
      description: 'Control Objectives for Information and Related Technologies - Framework for governance and management of enterprise IT.',
      issues: [
        {
          control: 'APO13 Managed Security',
          status: 'Partially Compliant',
          adherence: 'Information security management system (ISMS) is not fully implemented.',
          details: 'Some departments are not fully aligned with the organization-wide ISMS policies and procedures.',
          recommendation: 'Conduct organization-wide ISMS awareness training and implement compliance monitoring.',
          failingSubscriptions: [
            { name: 'IT Governance Subscription', id: 'sub-654-itgov' },
            { name: 'Risk Management Subscription', id: 'sub-987-risk' }
          ]
        }
      ]
    },
    {
      name: 'APRA',
      compliance: 89,
      description: 'Australian Prudential Regulation Authority standards for financial institutions.',
      issues: [
        {
          control: 'CPS 234 Information Security',
          status: 'Partially Compliant',
          adherence: 'Some third-party service providers lack proper security assessments.',
          details: 'Two critical SaaS providers have not undergone a security assessment in the last 12 months.',
          recommendation: 'Conduct security assessments for all critical third-party providers annually.',
          failingSubscriptions: [
            { name: 'Vendor Management Subscription', id: 'sub-678-vendor' },
            { name: 'Core Banking Subscription', id: 'sub-901-banking' }
          ]
        }
      ]
    }
  ]

  const handleStandardClick = (standard) => {
    setSelectedStandard(standard)
    onOpen()
  }

  return (
    <Box>
      <Heading mb={6} color="gray.800">Compliance Standards</Heading>
      <Text mb={8} fontSize="lg" color="gray.600">Review and manage compliance across various industry standards and regulations.</Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {standards.map((standard, index) => (
          <ComplianceStandardCard 
            key={index} 
            {...standard} 
            onClick={() => handleStandardClick(standard)}
          />
        ))}
      </SimpleGrid>

      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <ModalContent borderRadius="xl">
          <ModalHeader>{selectedStandard?.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {selectedStandard && (
              <ComplianceStandardDetail standard={selectedStandard} />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default ComplianceStandards